function getMessage(message) {
  return new Promise((resolve, reject) => {
    if (!message) return reject("Please enter your message");
    return resolve(message.toUpperCase());
  });
}

export const showMessage = async (req, res) => {
  try {
    const message = await getMessage("Message");
    res.json({ message });
  } catch (error) {
    res.json({ error });
  }
};
