<?php

/*** Child Theme Function  ***/

function mkdf_child_theme_enqueue_scripts() {
	wp_register_style( 'childstyle', get_stylesheet_directory_uri() . '/style.css'  );
	wp_enqueue_style( 'childstyle' );
}
add_action('wp_enqueue_scripts', 'mkdf_child_theme_enqueue_scripts', 11);

add_action('init', 'register_post_types');

function register_post_types()
{
    /**
     *  slider front
     **/

    $slider_front = array(
        'labels' => array(
            'name' => 'Slider front',
            'singular_name' => 'slider_front',
        ),
        'public' => true,
        'supports' => array('title'),
        'menu_icon' =>'dashicons-menu'
    );

    register_post_type('slider_front', $slider_front);
}

function slider_second_front_func(){
    require_once('slider/slider_data.php');
//    require_once('slider/test.php');

}
add_shortcode( 'slider_second_front', 'slider_second_front_func' );