import { TiDelete } from 'react-icons/ti';
import { Button, PhoneItem, NamePhone } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <PhoneItem key={id}>
              <NamePhone>
                {name}: {number}
              </NamePhone>
              <Button
                type="button"
                onClick={() => onDelete(id)}
                aria-label="Delete"
              >
                <TiDelete
                  style={{
                    width: '20px',
                    height: '20px',
                    fill: 'inherit',
                  }}
                />
              </Button>
            </PhoneItem>
          );
        })}
      </ul>
    </>
  );
};

