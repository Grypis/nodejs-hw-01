import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.splice(-1, 1);
    await writeContacts(contacts);
  } catch (error) {
    console.log('Error removing the last contact:', error);
  }
};

removeLastContact();
