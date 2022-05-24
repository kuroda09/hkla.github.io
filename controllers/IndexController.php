<?php 

namespace Controller;

class IndexController extends Controller{
    public function __construct(){
        parent::__construct();
        $this->init();
    }

    public function init($template = '', $parameters = []){
        parent::init('index.html.twig',['name' => 'John Doe', 
        'occupation' => 'gardener']);
    }
}