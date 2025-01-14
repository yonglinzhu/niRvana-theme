<?php

function register_pandastudio_block_title()
{
    wp_register_script('pandastudio-block-title', get_stylesheet_directory_uri().'/pandastudio_plugins/block_title/block.build.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ));
    register_block_type('pandastudio/title', array('editor_script' => 'pandastudio-block-title',));
}if (function_exists('register_block_type')) {
    add_action('init', 'register_pandastudio_block_title');
}
