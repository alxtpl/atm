# **ATM Transaction System**

## **Project Description**

The **ATM Transaction System** is a simple web-based application that simulates basic ATM functionalities such as deposits and cash withdrawals (Cash Back). The project is built using **React** and demonstrates a clean, state-managed user interface where users can:

- View their current account balance.
- Select between making a deposit or withdrawing cash.
- Input the transaction amount.
- Submit a valid transaction.

The application ensures that only valid transactions are allowed. For instance, users cannot withdraw more money than their available balance, nor can they make transactions with negative or zero amounts. The balance is updated in real-time as transactions are submitted.

### **Key Features:**
- **Account Balance Display**: Shows the user’s current balance at all times.
- **Transaction Mode Selection**: Allows users to choose between making a deposit or withdrawing cash.
- **Form Validation**: Disables the submit button until a valid transaction is entered (i.e., the amount is greater than zero and does not exceed the balance in the case of cash back).
- **State Management**: Uses React's `useState` to track deposit amount, account balance, transaction validity, and the transaction type (Deposit or Cash Back).

### **Improvements Made:**

Several improvements were made to enhance the user experience, performance, and code readability:

1. **Enhanced Form Validation**: 
   - The form now prevents submission if the input value is less than or equal to zero.
   - For cash back, the form ensures that the transaction amount does not exceed the current account balance.
   - The submit button is only enabled if the transaction is valid.

2. **Improved Code Structure**:
   - Refactored the `ATMDeposit` component for better readability. The choice of action (Deposit or Cash Back) is now handled with a simple conditional instead of using an array with index-based logic.
   - Added clear placeholders and labels in the input fields to improve the UI/UX.
   - Added comments and simplified logic for setting transaction modes and handling form submission.

3. **Better UX**:
   - Reset the deposit field to zero after each valid transaction, giving users clear feedback that the transaction was successfully processed.
   - Added default values in the selection drop-down to prompt users to choose an action, preventing confusion if no action is selected.

4. **Responsive Design**:
   - The layout is designed to be user-friendly and can be easily styled for mobile or desktop environments by adjusting the CSS styles.

---

### **Technologies Used**
- **React.js**: A popular JavaScript library for building user interfaces, particularly single-page applications.
- **JavaScript**: For managing application logic.
- **HTML/CSS**: Basic structure and styling.


