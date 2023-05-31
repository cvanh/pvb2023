<?php

add_filter('theme_page_templates', 'add_new_template');
function add_new_template($posts_templates)
{
    $templates = array(
        'home' => 'Home',
        'contact' => 'Contact',
        'posts' => 'posts',
    );
    return array_merge($posts_templates, $templates);
}
