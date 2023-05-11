<?php 

namespace Controller\Admin;

class DashboardController extends \Controller\CoreController{

    public $templateVars = [];

    public function __construct(){
        parent::__construct();
        $this->init();
    }

    public function init($template = '', $parameters = []){
        parent::init('admin/dashboard.html.twig',$this->assignTemplateVars());
    }

    public function assignTemplateVars() {
        $defaults = [
            'css' => [
                $this->base_dir.'/themes/main/admin/css/bootstrap.min.css',
                $this->base_dir.'/themes/main/admin/css/dashboard.css',
            ], 
        ];

        $this->templateVars = array_merge($this->templateVars,$defaults);

        return $this->templateVars;
    }
}