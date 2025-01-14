<?php

function register_pandastudio_block_download()
{
    wp_register_script('pandastudio-block-download', get_stylesheet_directory_uri().'/pandastudio_plugins/block_download/block.build.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ));
    register_block_type('pandastudio/download', array('editor_script' => 'pandastudio-block-download',));
}if (function_exists('register_block_type')) {
    add_action('init', 'register_pandastudio_block_download');
}
