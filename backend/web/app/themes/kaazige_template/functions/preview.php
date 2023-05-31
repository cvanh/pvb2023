<?php

function filter_preview_post_link($preview_link, $post)
{
    $id = get_the_ID();
    return get_home_url() . '/api/'
        . 'preview/?id='
        . $id . '&type=' . $post->post_type
        . '&secret=' . NONCE_SALT;
};

add_filter('preview_post_link', 'filter_preview_post_link', 10, 2);