export default function handler(req, res) {
  const { path } = req.query;
  if (!path) {
    res.status(400).send("Bad Request");
    return;
  }
  const githubUrl = `https://github.com/joshuayoes/knowledge-bank/blob/main/${path}.md`;
  res.redirect(302, githubUrl);
}
