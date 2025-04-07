const DangerButton = ({ label }: { label: string }) => {
  return <button className="bg-red-300 p-4 btn-danger">{label}</button>;
};

export default DangerButton;
