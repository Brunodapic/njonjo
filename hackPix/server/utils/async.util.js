/**
 * Used to wrap around a controller to allow catching asynchronous errors.
 * Any route not wrapped in this will fail to catch anything other than simple errors.
 */
export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        next(error);
    }
};