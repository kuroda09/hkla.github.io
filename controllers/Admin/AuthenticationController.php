<?php 

namespace Controller\Admin;

class AuthenticationController extends \Controller\CoreController{

    public $templateVars = [];

    public function __construct(){
        parent::__construct();
        if(isset($_POST['submit'])){
            print_r($_SESSION);
            exit;
        }
        $this->init();
    }

    public function init($template = '', $parameters = []){
        parent::init('admin/auth.html.twig',$this->assignTemplateVars());
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