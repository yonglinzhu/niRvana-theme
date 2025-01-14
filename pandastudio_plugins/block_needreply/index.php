<?php

function register_pandastudio_block_needreply()
{
    wp_register_script('pandastudio-block-needreply', get_stylesheet_directory_uri().'/pandastudio_plugins/block_needreply/block.build.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'underscore' ));
    register_block_type('pandastudio/needreply', array('editor_script' => 'pandastudio-block-needreply',));
}if (function_exists('register_block_type')) {
    add_action('init', 'register_pandastudio_block_needreply');
}
