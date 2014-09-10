<?php
file_put_contents('mails.txt', time() . ' - ' . $_POST['mail'] . "\n", FILE_APPEND);