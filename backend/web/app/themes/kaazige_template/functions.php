<?php

require_once "functions/preview.php";

require_once "functions/theme-support.php";

require_once "functions/page-templates.php";

require_once "functions/shortcode.php";

require_once "functions/post-types.php";

// get all the files in the acf diretory
$files = glob(get_template_directory() . '/acf/*.php');
foreach ($files as $file) {
    require_once($file);
}
echo "asdd";