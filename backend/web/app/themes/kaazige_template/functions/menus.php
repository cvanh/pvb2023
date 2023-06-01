<?php

function register_menus()
{
    register_nav_menu('header_menu', __('Header Menu', 'kaas'));
    register_nav_menu('footer_menu', __('Footer Menu', 'kaas'));
}
add_action('after_setup_theme', 'register_menus');