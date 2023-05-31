<?php

add_shortcode('footag', 'wpdocs_footag_func');
function wpdocs_footag_func($atts)
{
    return "foo = {$atts['foo']}";
}
