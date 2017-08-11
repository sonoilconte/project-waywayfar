let db = require('../models');

// POST to posts /api/posts/

function create(req,res){
  db.Post.create(req.body, function(err, post){
    if(err){
      console.log('error creating new post: ', err);
    }
    console.log('created post: ', post);
    res.json(post);
  });
}

// GET all posts /api/posts/

function show(req, res){
  db.Post.find({}, function(err, allPosts){
    if(err){
      console.log('error finding posts (by city): ', err);
    }
    res.json(allPosts);
  });
}

// DELETE a post /api/posts/:postId

function destroy(req, res){
  db.Post.findOneAndRemove({ _id: req.params.postId }, function(err, foundPost){
    if(err){
      console.log('error deleting post: ', err);
    }
    res.json(foundPost);
  });
}

// GET posts and filter by cityId /api/posts/:cityId

function indexByCity(req, res){
  db.Post.find({}, function(err, allPosts){
    if(err){
      console.log('error finding posts (by city): ', err);
    }
    console.log('req.params.cityId', req.params.cityId);

    allPosts.forEach(function(post){
      console.log('post _city', post._city);
    });

    let cityPosts = allPosts.filter(function(post){
      return (post._city === req.params.cityId);
    });
    res.json(cityPosts);
  });
}

// UPDATE posts by id /api/posts/:postId

function update(req, res){
  console.log('updating with data: ', req.body);
  db.Post.findById(req.params.postId, function(err, foundPost){
    if(err){
      console.log('error updating post', err);
    }
    foundPost.title = req.body.title;
    foundPost.text = req.body.text;
    foundPost.save(function(err, savedPost){
      if(err){
        console.log('error saving updated post', err);
      }
      res.json(savedPost);
    });
  });
}

module.exports = {
  create: create,
  show: show,
  destroy: destroy,
  indexByCity: indexByCity,
  update: update
};
