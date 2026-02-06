# Contract: Formspree Contact Form Integration

**Feature**: 1-static-portfolio
**Date**: 2026-02-05
**Type**: External Service Integration

## Overview

Contact form submissions are sent to Formspree for processing and email delivery.

---

## Endpoint

```
POST https://formspree.io/f/{FORM_ID}
Content-Type: application/x-www-form-urlencoded
```

**Note**: `{FORM_ID}` is obtained after creating a form in Formspree dashboard.

---

## Request Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | Yes | Visitor's full name |
| email | string | Yes | Visitor's email address (validated format) |
| message | string | Yes | Project brief / inquiry message |
| _gotcha | string | No | Honeypot field for spam prevention (must be empty) |
| _subject | string | No | Custom email subject line |

### Example Request

```html
<form action="https://formspree.io/f/{FORM_ID}" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>

  <!-- Honeypot (hidden from users) -->
  <input type="text" name="_gotcha" style="display:none">

  <!-- Custom subject -->
  <input type="hidden" name="_subject" value="New inquiry from mubeenf.com">

  <button type="submit">Send</button>
</form>
```

---

## Response Handling

### AJAX Submission (Recommended)

```javascript
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Success: Show confirmation message
      showSuccess('Message sent successfully!');
      form.reset();
    } else {
      // Error: Show error message
      const data = await response.json();
      showError(data.errors?.map(e => e.message).join(', ') || 'Something went wrong');
    }
  } catch (error) {
    showError('Network error. Please try again.');
  }
});
```

### Response Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | Show success message, reset form |
| 400 | Validation error | Display field-specific errors |
| 422 | Spam detected | Show generic error (don't reveal spam detection) |
| 429 | Rate limited | Show "try again later" message |
| 500 | Server error | Show generic error, suggest email alternative |

---

## Validation Rules (Client-Side)

Before submission, validate:

1. **Name**: Non-empty, minimum 2 characters
2. **Email**: Valid email format (RFC 5322)
3. **Message**: Non-empty, minimum 10 characters

```javascript
function validateForm(formData) {
  const errors = [];

  const name = formData.get('name')?.trim();
  const email = formData.get('email')?.trim();
  const message = formData.get('message')?.trim();

  if (!name || name.length < 2) {
    errors.push({ field: 'name', message: 'Please enter your name' });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email' });
  }

  if (!message || message.length < 10) {
    errors.push({ field: 'message', message: 'Please enter a message (min 10 characters)' });
  }

  return errors;
}
```

---

## Security Considerations

1. **Honeypot Field**: `_gotcha` field catches bots that fill all fields
2. **No API Keys**: Formspree handles auth server-side; no keys in client code
3. **Rate Limiting**: Formspree enforces limits; gracefully handle 429 responses
4. **Email Validation**: Prevent obvious typos/invalid formats client-side

---

## Setup Checklist

- [ ] Create Formspree account at formspree.io
- [ ] Create new form in dashboard
- [ ] Copy form ID to form action URL
- [ ] Configure email recipient (mubeenfatima.cs@gmail.com)
- [ ] Enable email notifications
- [ ] Test submission flow
- [ ] Verify honeypot protection works
