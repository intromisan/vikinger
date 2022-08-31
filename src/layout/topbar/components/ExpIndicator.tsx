const ExpIndicator = () => {
  return (
    <div className="experience-indicator_container">
      <div className="experience-indicator_info">
        <span>Next:</span>
        <span>38 EXP</span>
      </div>
      <progress value="62" max="100"></progress>
    </div>
  );
};

export default ExpIndicator;
