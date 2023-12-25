


export default function MessageBox({ username, textColor, bcolor }) {
  let styles = { color: textColor, backgroundColor: bcolor };

  return (
    <>
      <h1 style={styles}>{username}</h1>
    </>
  );
}
  