## Installation (for development)

1. Run Composer `$ composer install --prefer-dist` (use Composer V1)
2. Update the `.env`.

- Add `WP_ENV` variable set to `development` to the `.env` file. Make sure NOT to do this for the `.env.default` file as this will affect production and staging environments also.

3. Add the `REVALIDATION_TOKEN` with the same value you created for the frontend to the `.env` file in backend folder.
4. Update the config file at `config/development.php` (you can also set these in your .env file)

- Database variables
  - `DB_NAME` - Database name
  - `DB_USER` - Database user
  - `DB_PASSWORD` - Database password
  - `DB_HOST` - Database host

5. The theme can be found in: `web/app/themes/glamrock`
6. Set the document root on your webserver to the `web` folder so you can browse to /wp-admin in your browser via a .test domain. For example, with Valet: `cd web/ && valet link glamrock` (dont forget to: `valet secure glamrock` to use HTTPS). If you use a frontend proxy setup (see frontend README), you might want to do it a bit differently; set up your backend like this `cd web/ && valet link backend.glamrock` (and secure it) and do almost the same for the frontend: `cd frontend/ && valet link frontend.glamrock`.
7. Start with a clean database? You can now run the installer via: `https://glamrock.test/wp/wp-admin/install.php`.
8. You can now find the Rest API here: `https://glamrock.test/wp/wp-json` and WordPress admin here: `https://glamrock.test/wp/wp-admin`
9. Don't forget to change the permalink structure to '/blog/%postname%/' on: wp-admin/options-permalink.php.
