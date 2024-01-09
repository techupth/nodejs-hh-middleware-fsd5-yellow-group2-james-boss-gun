export const validateAssignmentData = (req, res, next) => {
  const assignmentData = req.body;

  if (assignmentData.title.length > 35) {
    return res.status(400).json({
      message: "Title must not be over 35 characters",
    });
  }

  if (
    !Array.isArray(assignmentData.categories) ||
    assignmentData.categories.length < 1
  ) {
    return res.status(400).json({
      message: "Categories must be an array with at least 1 value",
    });
  }

  if (assignmentData.description.length > 150) {
    return res.status(400).json({
      message: "Description must not exceed 150 characters",
    });
  }

  next();
};
