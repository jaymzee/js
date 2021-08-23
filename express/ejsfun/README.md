# in bootstrap 4.x jumbotron is just
``` css
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: .3rem;
}
```

in Bootstrap v5.x jumbotron is removed in favor of utility classes like
.bg-light for the background color and .p- classes to control padding.
jumbotron can be emulated with:
``` html
<h5>In Bootstrap v5.x</h5>

<div class="bg-light p-5 rounded-lg m-3">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
```
