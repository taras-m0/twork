<?php

date_default_timezone_set('Europe/Moscow');

$app = new \app\Application();

$app->get('/', function(\Symfony\Component\HttpFoundation\Request $request) use ($app) {
    $sql = "SELECT * FROM `comments`";
    $db = $app['db'];
    $comments = $db->fetchAll($sql);

    return $app['twig']->render('index.html.twig', array(
        "comments" => $comments
    ));
});

$app->get('/get', function(\Symfony\Component\HttpFoundation\Request $request) use ($app) {
    $sql = "SELECT * FROM `comments`";
    $db = $app['db'];
    $comments = $db->fetchAll($sql);

    return new \Symfony\Component\HttpFoundation\JsonResponse($comments);
});

$app->post('/api/add', function(\Symfony\Component\HttpFoundation\Request $request) use ($app) {
    $db = $app['db'];
    $result = $db->insert( 'comments', json_decode( $request->getContent(), true ) );

    return new \Symfony\Component\HttpFoundation\JsonResponse(array('id' => (int) $db->lastInsertId()));
});

return $app;
