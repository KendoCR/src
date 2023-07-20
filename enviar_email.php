<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Configurações de e-mail
    $to = 'luansupergrande3020@gmail.com';
    $subject = 'Novo contato do formulário de contato do portfólio';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Monta o corpo do e-mail
    $body = "Nome: $name\n\n";
    $body .= "E-mail: $email\n\n";
    $body .= "Mensagem:\n$message";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
} else {
    echo "Erro: método de requisição inválido.";
}
?>
