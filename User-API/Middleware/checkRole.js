
function checkRole(role) {
  return (req, res, next) => {
    
    if (req.user && req.user.role === role) {
      next(); 
    } else {
      return res.status(403).json({ message: "Access denied: Admins only" });
    }
  };
}

module.exports = checkRole;
