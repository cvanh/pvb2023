<?php

/**
 * use if wp_env = production
 */

use Roots\WPConfig\Config;

// forest config
Config::define('DB_NAME', getenv('DATABASE_WORDPRESS_NAME'));
Config::define('DB_USER', getenv('DATABASE_WORDPRESS_USER'));
Config::define('DB_PASSWORD', getenv('DATABASE_WORDPRESS_PASSWORD'));
Config::define('DB_HOST', getenv('DATABASE_WORDPRESS_HOST'));

Config::define('WP_HOME', 'https://pvb.forest.imaretarded.dev');
Config::define('WP_BASEURL', 'https://backend.pvb.forest.imaretarded.dev');
Config::define('WP_SITEURL', 'https://backend.pvb.forest.imaretarded.dev/wp');