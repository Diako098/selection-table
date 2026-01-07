// App.tsx
import { useState } from "react";
import ListGroup from "./list group"; // دقت کنید نام فایل شما فاصله دارد
import Button from "./Button";

function App() {
  const cities = ["تهران", "شیراز", "اصفهان", "تبریز"];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="p-5">
      {alertVisible && (
        <div className="alert alert-primary alert-dismissible fade show">
          آیتم جدید انتخاب شد!
          <button 
            onClick={() => setAlertVisibility(false)} 
            className="btn-close"
          ></button>
        </div>
      )}

      <ListGroup 
        items={cities} 
        heading="شهرها" 
        onSelectItem={(item) => console.log(item)} 
      />

      <div className="mt-3">
        <Button color="danger" onClick={() => setAlertVisibility(true)}>
          نمایش اعلان
        </Button>
      </div>
    </div>
  );
}

export default App;
