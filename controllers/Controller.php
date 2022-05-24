<?php 

namespace Controller;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Controller{

    public $theme_dir;
    public $loader;
    public $twig;

    public function __construct(){
        $this->loader = new FilesystemLoader(dirname(dirname(__FILE__)) . '/themes/main');
        $this->twig = new Environment($this->loader);
        $this->theme_dir = dirname(dirname(__FILE__)).'/themes/main';
    }

    public function init($template, $parameters = []){
        echo $this->twig->render($template, $parameters);
    }
}