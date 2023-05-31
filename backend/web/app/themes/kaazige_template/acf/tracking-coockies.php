<?php

if (function_exists('acf_add_local_field_group')) :

    acf_add_local_field_group(array(
        'key' => 'group_64738c85db6fe',
        'title' => 'tracking_cookies',
        'fields' => array(
            array(
                'key' => 'field_64738c869f448',
                'label' => 'functional cookies',
                'name' => 'functional_cookies',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => 'these script tags will be run when the user agrees on functional cookies',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'show_in_graphql' => 1,
                'default_value' => '<script>console.log("i am a funtional cookie")</script/>',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
            array(
                'key' => 'field_64738cda9f449',
                'label' => 'tracking cookies',
                'name' => 'tracking_cookies',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => 'this will be run if the user agrees on having all the cookies',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'show_in_graphql' => 1,
                'default_value' => '<script>console.log("i am a tracking cookie")</script/>',
                'maxlength' => '',
                'placeholder' => '',
                'prepend' => '',
                'append' => '',
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'site-options',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => 0,
        'show_in_graphql' => 1,
        'graphql_field_name' => 'tracking_cookies',
        'map_graphql_types_from_location_rules' => 0,
        'graphql_types' => '',
    ));

endif;
