# Emails Editor

Emails Editor - javascript библиотека для редакторирования email адресов.

Умеет добавлять случайный email и считает колиество правильных адресов.

Также есть API для получения, установки и подписки на обновление адресов.

## Demo

[https://perryutkonos.github.io/emails-form/dist](https://perryutkonos.github.io/emails-form/dist)

## Установка

Подключите Javascript и CSS файлы в Head HTML страницы

```html
<head>
    <link href="https://perryutkonos.github.io/emails-form/dist/emails.miro.css" rel="stylesheet">
    <script type="text/javascript" src="https://perryutkonos.github.io/emails-form/dist/emails.miro.jss"></script>    
</head>
```
## Использование

Инициализруйте плагин выполнив `EmailsEditor({container, options}) `

 - container - HTML элемент, в который будет встроен плагин
 - options - параметры, в которых будут предустановленные значения
 
### Пример:

```html
<div id="emails-editor"></div>
<script>
 const container = document.querySelector('#emails-editor');
 const options = {
    title: 'My Board',
    defaultEmails: ['my@google.com']
  };
  EmailsEditor({container, options});
</script>
```

## Параметры

### Container

HTML элемент, в который будет встроен плагин

### Options
необязательный параметр

#### `title`
Тип - string

Устанавливает подпись к форме

Пример:
```html
<div id="emails-editor"></div>
<script>
 const container = document.querySelector('#emails-editor');
  EmailsEditor({container, options: {
    title: 'My Board'
  }});
</script>
```

#### `defaultEmails`
Тип - Array\<string>

Устанавливает список email адресов по умолчанию

Пример:
```html
<div id="emails-editor"></div>
<script>
 const container = document.querySelector('#emails-editor');
  EmailsEditor({container, options: {
     defaultEmails: ['my@google.com']
  }});
</script>
```

### API

Для управления данными и их получения есть методы у экземпляра плагина

#### `myEmailsEditor.getEmails()`

Возвращает маccив email адресов

Пример:
```html
<div id="emails-editor"></div>
<script>
    const container = document.querySelector('#emails-editor');
    const editor = EmailsEditor({container, options: {
        title: 'My Board',
        defaultEmails: ['my@google.com']
    }});

    editor.getEmails() /* ['my@google.com']
</script>
```

#### `myEmailsEditor.setEmails(Array<string>)`

Устанавливает список адресов

Пример:
```html
<div id="emails-editor"></div>
<script>
    const container = document.querySelector('#emails-editor');
    const editor = EmailsEditor({container, options: {
        title: 'My Board',
        defaultEmails: ['my@google.com']
    }});

    editor.setEmails(['email1@mail.ru','email2@mail.ru']);
</script>
```

#### `myEmailsEditor.onChange(function(emails){})`

Подписывается на изменения email адресов в форме
Пример:
```html
<div id="emails-editor"></div>
<script>
    const container = document.querySelector('#emails-editor');
    const editor = EmailsEditor({container, options: {
        title: 'My Board',
        defaultEmails: ['email1@mail.ru','email2@mail.ru']
    }});

    editor.onChange(function(emails) {
        console.log(emails) // ['email1@mail.ru','email2@mail.ru']
    });
</script>
```






