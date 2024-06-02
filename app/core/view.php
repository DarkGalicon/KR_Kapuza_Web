class View
{
    //public $template_view; //можно в дальнейшем создать шаблон

    function generate($content_view, $template_view, $data = null)
    {
        /*
        if(is_array($data)) {
            extract($data);
        }
        */

        include 'application/views'.$template_view
    }
}