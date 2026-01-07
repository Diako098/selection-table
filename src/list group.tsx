// ListGroup.tsx
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2 className="mb-3">{heading}</h2>
      {items.length === 0 && <p>هیچ موردی یافت نشد.</p>}
      
      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col" style={{ width: '50px' }}>#</th>
            <th scope="col">نام شهر</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item}
              className={selectedIndex === index ? "table-primary" : ""}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
              style={{ cursor: 'pointer' }}
            >
              <td>{index + 1}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListGroup;