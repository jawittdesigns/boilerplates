<?php
/**
 * 404
 *
 * @package   Project_Name
 * @author    Project_Author
 * @copyright Copyright (c) Project_Date, Project_Author
 * @license   GNU General Public License v2 or later
 * @version   Project_Version
 */

if ( ! defined( 'WPINC' ) ) {
	wp_die( 'No Access Allowed!', 'Error!', array( 'back_link' => true ) );
}

get_header();
get_template_part( 'template-parts/content/error-404' );
get_footer();
