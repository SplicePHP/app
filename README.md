# SplicePHP Application Skeleton fork of Cakephp Application Skeleton

Please note that this skeleton requires access to private repositories.

## ! The application will not be able to compile without access to several private bitbucket repositories !

A skeleton for creating applications with [CakePHP](http://cakephp.org) 3.0.

## Installation

1. Download [Composer](http://getcomposer.org/doc/00-intro.md) or update `composer self-update`.
2. Run `php composer.phar create-project --prefer-dist splicephp/app -s dev [app_name]`.

If Composer is installed globally, run
```bash
composer create-project --prefer-dist -s dev splicephp/app [app_name]
```

You should now be able to visit the path to where you installed the app and see
the setup traffic lights.

## Configuration

Read and edit `config/app.php` and setup the 'Datasources' and any other
configuration relevant for your application.
