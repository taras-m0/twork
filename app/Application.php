<?php

namespace app;

use app\ControllerProvider\Provider;
use Silex;
use Silex\Application as SilexApplication;
use Symfony\Component\Yaml\Parser;

class Application extends SilexApplication
{
    public function __construct()
    {
        parent::__construct();
        $this->registerConfig();
        $this->registerProviders();
//        $this->mountControllers();
        $this->registerTwig();
    }

    public function registerConfig()
    {
        $yaml = new Parser();
        $config = $yaml->parse(file_get_contents(__DIR__.'/../config/config.yml'));
        $this['config'] = $config;
    }

    public function registerProviders()
    {
//        $this->register(new \app\Provider\Service\ControllerProviders());
        $this->register(new \Silex\Provider\SwiftmailerServiceProvider());
        $this->register(new \Silex\Provider\ValidatorServiceProvider());
        $this->register(new \Silex\Provider\FormServiceProvider());
        $this->register(new \Silex\Provider\TranslationServiceProvider(), ['translator.messages' => []]);

        $this->register( new Silex\Provider\DoctrineServiceProvider(), array(
            'dbs.options' => array(
                'default' => array(
                    'driver'   => 'pdo_mysql',
                    'host'     => $this[ 'config' ][ 'doctrine_mysql' ][ 'connections' ][ 'server' ],
                    'port'     => $this[ 'config' ][ 'doctrine_mysql' ][ 'connections' ][ 'port' ],
                    'dbname'   => $this[ 'config' ][ 'doctrine_mysql' ][ 'connections' ][ 'database' ],
                    'user'     => $this[ 'config' ][ 'doctrine_mysql' ][ 'connections' ][ 'user' ],
                    'password' => $this[ 'config' ][ 'doctrine_mysql' ][ 'connections' ][ 'password' ],
                    'charset'  => 'utf8',
                ),
            ),
        ) );
    }

    private function mountControllers()
    {
        $this->mount('/', $this['provider.controller.home']);
        $this->mount('/clients', $this['provider.controller.clients']);
    }

    private function registerTwig()
    {
        $this->register(new Silex\Provider\TwigServiceProvider(), [
            'twig.path' => __DIR__.'/../templates/',
        ]);

        $this['twig'] = $this->extend('twig', function ($twig, $app) {

            $twig->addGlobal('navigation', $app['request']->getRequestUri());

            $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset) use ($app) {
                return $app['request_stack']->getMasterRequest()->getBasepath().'/'.ltrim($asset, '/');
            }));

            return $twig;
        });

        $this['templating.loader'] = $this->share(function () {
            return new FilesystemLoader(__DIR__.'/../templates/');
        });
    }
}
