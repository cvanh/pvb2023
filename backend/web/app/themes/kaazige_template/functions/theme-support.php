<?php
function theme_login_logo()
{
    echo get_stylesheet_directory_uri();
    echo "<style type='text/css'>
        .login h1 a {
          background-image: url(" . get_template_directory_uri() . "/assets/logo.gif !important;
          width: 274px;
          background-size: 274px auto;
          background-position: center bottom;
        }
    </style>";
}
add_action('login_head', 'theme_login_logo');
