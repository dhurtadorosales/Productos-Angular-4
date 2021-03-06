<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit707cc0ada62263998979afb2bb63a1f2
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static $classMap = array (
        'PiramideUploader' => __DIR__ . '/../..' . '/piramide-uploader/PiramideUploader.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit707cc0ada62263998979afb2bb63a1f2::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit707cc0ada62263998979afb2bb63a1f2::$classMap;

        }, null, ClassLoader::class);
    }
}
