<?
require_once 'Utils/Helpers.php';

class FakeFile {
    /*
    'id' => 'integer',
			'id_post' => 'integer',
			'thread_key' => 'string',
			'fake_path' => 'string',
			'fake_name' => 'string',
            'file_name' => 'string'*/

    function __construct($file_path_, $file_ext_, $map_key ) {

        $name = uniqid();
        $this ->fake_name = $name.'.'.$file_ext_;
        $this ->file_name = Helpers::getRealFileName($this ->fake_name).'.'.$file_ext_;
        //$this ->fake_path = $file_path_."img/".$map_key."_". $this ->file_name;
        $this ->fake_path = $file_path_."php/uploads/".$map_key."/".Helpers::getRealFileName($this ->fake_name).'.'.$file_ext_;
        $this ->map_key = $map_key;
            
    }

}