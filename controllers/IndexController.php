<?php 

namespace Controller;

class IndexController extends CoreController{
    public function __construct(){
        parent::__construct();
        $this->init();
    }

    public function init($template = '', $parameters = []){
        parent::init('index.html.twig',
            [
                'page_name' => 'index', 
            ]
        );
    }
}