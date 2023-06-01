<?php


function cursus_post_type()
{
    $labels = array(
        'name' => __('Cursus', 'kaas'),
        'singular_name' => __('Cursus', 'kaas'),
        'search_items' => __('Cursus zoeken ', 'kaas'),
        'all_items' => __('Alle Cursussen', 'kaas'),
        'edit_item' => __('Bewerk Cursus', 'kaas'),
        'update_item' => __('Cursus bijwerken', 'kaas'),
        'add_new_item' => __('Nieuwe Cursus aanmaken', 'kaas'),
        'new_item_name' => __('Titel voor nieuwe Cursus', 'kaas'),
        'menu_name' => __('Cursus', 'kaas'),
    );

    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => _('dashicons-media-text'),
        'query_var' => true,
        'menu_position' => 8,
        'map_meta_cap' => true,
        'has_archive' => false,
        'show_in_rest' => true,
        'hierarchical' => false,
        'show_in_graphql' => true,
        'graphql_single_name' => 'Article',
        'graphql_plural_name' => 'Articles',
        'supports' => array('title', 'editor', 'thumbnail', 'author', 'revisions'),
    );

    register_post_type('article', $args);
}
add_action('after_setup_theme', 'cursus_post_type');

function post_remove()
{
    remove_menu_page('edit.php');
}

add_action('admin_menu', 'post_remove');