<?php
/**
 *  Theme
 *
 * @package : test
 * file   : /Users/semih/Desktop/wordpress/khuni1x/wp-content/themes/khuni1x/inc/classes/theme
 *  author : jacean
 *  date   : 2021-1-4 2:36:39
 *  last   : 2021-1-4 2:36:39
 */

if ( ! defined( 'ABSPATH' ) ) {
   exit; // @NO DIRECT ACCESS
}

if ( ! class_exists( 'Kraft_Theme' ) ) :

   /**
    * Kraft_Theme
    */
   class Kraft_Theme extends Kraft_Theme_Loader {

      /**
       * Method __construct
       *
       * @return void
       */
      public function __construct() {

         {{Load Text Domain}}

         add_action( 'wp_enqueue_scripts', array( &$this, 'load_scripts' ) );
         add_action( 'wp_enqueue_scripts', array( &$this, 'load_styles' ), 10 );
         add_action( 'after_setup_theme', array( &$this, 'load_functions' ), 10 );
         add_action( 'after_setup_theme', array( &$this, 'theme_supports' ), 10 );
         add_action( 'after_setup_theme', array( &$this, 'theme_image_sizes' ), 10 );
         add_action( 'image_size_names_choose', array( &$this, 'custom_image_sizes_names' ), 10 );
         add_action( 'after_setup_theme', array( &$this, 'create_menus' ), 10 );

         require KRAFT_THEME_DIR . '/inc/classes/class-kraft-theme-sidebars.php';

         $is_login = in_array( $GLOBALS['pagenow'], array( 'wp-login.php', 'wp-register.php' ), true );
         if ( ! is_admin() && ! $is_login ) {
            require KRAFT_THEME_DIR . '/inc/classes/class-wp-bootstrap-navwalker.php';
         } else {
            require KRAFT_THEME_DIR . '/inc/classes/class-kraft-theme-admin.php';
         }

         require KRAFT_THEME_DIR . '/inc/classes/class-kraft-theme-options.php';

         add_filter( 'excerpt_length', array( &$this, 'stack_excerpt_length' ), 999 );

      }

      /**
       * Method stack_excerpt_length
       *
       * @param $length $length [explicite description].
       *
       * @return int
       */
      public function stack_excerpt_length( $length ) {
         return 25;
      }

      /**
       * Method load_scripts
       *
       * @return void
       */
      public function load_scripts() {

         if ( ! is_admin() ) {

            {{Enqueue Scripts}}

         }

      }

      /**
       * Method load_styles
       *
       * @return void
       */
      public function load_styles() {

         if ( ! is_admin() ) {

            {{Enqueue Styles}}

         }

      }

      /**
       * Method load_functions
       *
       * @return void
       */
      public function load_functions() {
         require KRAFT_THEME_DIR . '/inc/functions/theme-functions.php';
      }

      /**
       * Method theme_supports
       *
       * @return void
       */
      public function theme_supports() {

         // Add default posts and comments RSS feed links to head.
         add_theme_support( 'automatic-feed-links' );

         /*
          * Let WordPress manage the document title.
          */
         add_theme_support( 'title-tag' );

         /*
          * Enable support for Post Thumbnails on posts and pages.
          */
         add_theme_support( 'post-thumbnails' );
         set_post_thumbnail_size( {{set_post_thumbnail_size}} );

         /*
          * Switch default core markup for search form, comment form, and comments
          * to output valid HTML5.
          */
         add_theme_support(
            'html5',
            array(
               'search-form',
               'comment-form',
               'comment-list',
               'gallery',
               'caption',
            )
         );

         /*
          * Enable support for Post Formats.
          */
         add_theme_support(
            'post-formats',
            array(
               'aside',
               'image',
               'video',
               'quote',
               'link',
               'gallery',
               'status',
               'audio',
               'chat',
            )
         );

         add_theme_support( 'custom-logo' );

         // Add menus.
         register_nav_menus( {{register_nav_menus}} );



         /*
          * Enable support for Page excerpts.
          */
         add_post_type_support( 'page', 'excerpt' );

      }


      /**
       * Method theme_image_sizes
       *
       * @return void
       */
      public function theme_image_sizes() {

         {{Image sizes}}

      }
      function custom_image_sizes_names( $sizes ) {

         {{Image Sizes Names}}

         return $sizes;
      }

      /**
       * Method create_menus
       *
       * @return void
       */
      public function create_menus() {

         // Add menus.
         {{Register Menus}}

      }

   }

   new Kraft_Theme();

endif;