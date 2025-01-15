const MovieComments = (props) => {
  return props.movieComments.map((comment) => (
    <div key={comment._id} className='border border-white p-2 rounded-3 mt-2'>
      <h6 className='text-center'>{comment.author}</h6>
      <p>
        <strong>Commento: </strong>
        {comment.comment}
      </p>
      <p>
        <strong>Voto:</strong> {comment.rate}
      </p>
    </div>
  ));
};

export default MovieComments;
