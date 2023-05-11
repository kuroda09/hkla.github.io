<?php 
namespace Controller;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class CoreController{

    public $theme_dir;
    public $base_dir;
    public $loader;
    public $twig;

    public function __construct(){
        session_start();
        $this->loader = new FilesystemLoader(dirname(dirname(__FILE__)) . '/themes/main');
        $this->twig = new Environment($this->loader);
        $this->theme_dir = dirname(dirname(__FILE__)).'/themes/main';
        $this->base_dir = 'http://'.$_SERVER['SERVER_NAME'];
    }

    public function init($template, $parameters = []){
        echo $this->twig->render($template, $parameters);
    }
}