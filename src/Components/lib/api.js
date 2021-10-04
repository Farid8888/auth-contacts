
const FIREBASE_DOMAIN = 'https://authentication-24631-default-rtdb.firebaseio.com/';

export async function getAllContacts() {
  const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch contacts.');
  }

  const transformedContacts = [];

  for (const key in data) {
    const contactObj = {
      id: key,
      ...data[key],
    };

    transformedContacts.push(contactObj);
  }

  return transformedContacts;
}


export async function addContact(contactData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/contacts.json`, {
      method: 'POST',
      body: JSON.stringify(contactData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create contact.');
    }
  
    return null;
  }



  export async function removeContact(contactId) {
    const response = await fetch(`${FIREBASE_DOMAIN}/contacts/${contactId}.json`, {
      method: 'DELETE'
    });
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Could not create quote.');
    }
  
    return null;
  }



  