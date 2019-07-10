import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

storiesOf('Kitchen Sink', module)
  .addParameters({
    readme: {
      sidebar: [
        `# Kitchen Sink
The 'kitchen sink' page is an all-in-one implementation of all UI kit features, rendered in-context like a regular production web page. This makes for an excellent platform to perform visual regression tests on the UI kit as well as perform any integration tests on the ui features.`
      ],
    },
  })
  .add('bootstrap3-example', () => `
<h1>NOTE: This is an example page from the old GIOS Bootstrap 3 framework.</h1>
<!-- Global Navigation -->
<nav class="navbar navbar-ws" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-example">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">School of Testing</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="navbar-example">
      <ul class="nav navbar-nav">
        <li><a href="/example-site" title="Home"><span class="fa fa-home hidden-xs hidden-sm" aria-hidden="true"></span><span class="hidden-md hidden-lg">Home</span></a></li>
        <li class="active"><a href="/example-site" title="Home"><span class="fa fa-home hidden-xs hidden-sm" aria-hidden="true"></span><span class="hidden-md hidden-lg">Home</span></a></li>
        <li class="hover"><a href="/example-site" title="Home"><span class="fa fa-home hidden-xs hidden-sm" aria-hidden="true"></span><span class="hidden-md hidden-lg">Home</span></a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Degree Programs <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Undergraduate</a></li>
            <li><a href="#">Graduate</a></li>
            <li><a href="/example-site/degree-detail/full-width">Degree Detail Page - Full Width</a></li>
            <li><a href="/example-site/degree-detail/2-column">Degree Detail Page - 2 Column</a></li>
            <li><a href="/example-site/degree-listing/grid-view">Degree Listing Page - Grid View</a></li>
            <li><a href="/example-site/degree-listing/list-view">Degree Listing Page - List View</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Admissions <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="https://students.asu.edu/apply">Apply Now</a></li>
            <li><a href="https://students.asu.edu/financialaid/paying">Paying for College</a></li>
            <li><a href="https://students.asu.edu/financialaid/net-price">Tuition Cost</a></li>
            <li><a href="https://visit.asu.edu/">Visit Campus</a></li>
            <li><a href="#">Request Info</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Student Life <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Life at ASU</a></li>
            <li><a href="#">Life at the School of Mathematical and Statistical Sciences</a></li>
            <li><a href="#">Housing &amp; Residential Communities</a></li>
            <li><a href="#">Community Name</a></li>
            <li><a href="#">Labs &amp; Facilities</a></li>
            <li><a href="#">Clubs &amp; Organizations</a></li>
            <li><a href="#">Service Learning</a></li>
            <li><a href="#">Study Abroad</a></li>
            <li><a href="#">Advising</a></li>
          </ul>
        </li>
        <li class="dropdown mega-menu">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Link Four <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <div class="row">
              <div class="column col-md-3 vertical-border-right">
                <li class="dropdown-title">Academic Departments</li>
                <li><a href="#">Accountancy</a></li>
                <li><a href="#">Agribusiness</a></li>
                <li><a href="#">Economics</a></li>
                <li><a href="#">Finance</a></li>
                <li><a href="#">Management</a></li>
                <li><a href="#">Marketing</a></li>
                <li><a href="#">Supply Chain Management</a></li>
              </div>
              <div class="column col-md-3">
                <li class="dropdown-title">Dropdown Header</li>
                <li><a href="#">Unde Omnis Iste</a></li>
                <li><a href="#">Natus Error Sit</a></li>
                <li><a href="#">Voluptatem Accusantium</a></li>
                <li><a href="#">Doloremque Laudantium</a></li>
                <li><a href="#">Totam Rem Aperiam</a></li>
                <li><a href="#">Eaque Ipsa</a></li>
                <li><a href="#">Quae Ab Illo Inventore Veritatis</a></li>
              </div>
              <div class="column col-md-3 vertical-border-right">
                <li class="dropdown-title hidden-xs hidden-sm">&nbsp;</li>
                <li><a href="#">Et Quasi Architecto</a></li>
                <li><a href="#">Beatae</a></li>
                <li><a href="#">Vitae Dicta Sunt</a></li>
                <li><a href="#">Explicabo</a></li>
                <li><a href="#">Nemo Enim</a></li>
                <li><a href="#">Ipsam Voluptatem</a></li>
                <li><a href="#">Quia Voluptas Sit</a></li>
              </div>
              <div class="column col-md-3">
                <li class="dropdown-title">Dropdown Header</li>
                <li><a href="#">Odit Aut Fugit</a></li>
                <li><a href="#">Sed Quia Consequuntur</a></li>
                <li><a href="#">Magni Dolores Eos</a></li>
                <li><a href="#">Qui Ratione</a></li>
                <li><a href="#">Voluptatem</a></li>
                <li><a href="#">Sequi Nesciunt</a></li>
                <li><a href="#">Neque Porro Quisquam</a></li>
              </div>
            </div><!-- /.row -->
          </ul>
        </li>
        <li><a href="#">Link Five</a></li>
        <li><a href="#">Link Six</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">About <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Why Choose ASU</a></li>
            <li><a href="#">News and Events</a></li>
            <li><a href="#">Faculty and Staff</a></li>
            <li><a href="#">Leadership</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container -->
</nav>


<!-- Page content of course! -->

<div class="hero hero-bg-img hero-action-call">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>ASU ranks 5th in the nation for producing the best-qualified graduates</h2>
        <p>by the Wall Street Journal</p>
        <button class="btn btn-primary btn-lg" type="button">See more rankings</button>
      </div>
    </div><!-- /.row -->
  </div><!-- /.container -->
</div>

<div class="gray-back">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-7 col-lg-8">
        <h2>Welcome to the Web Standards Tests</h2>
        <div id="qunit-container">
          <div id="qunit"></div>
          <div id="qunit-fixture"></div>
        </div>
      </div>
      <div class="col-sm-6 col-md-5 col-lg-4">
        <div class="panel explore-programs">
          <div class="panel-body">
            <h3>Pneumonoultramicroscopicsilicovolcanoconiosis</h3>
            <button class="btn btn-blue btn-block">Undergraduate programs</button>
            <button class="btn btn-blue btn-block">Graduate programs</button>
          </div>
        </div>
      </div>
    </div><!-- /.row -->
  </div><!-- /.container -->
</div>

<div class="container">
  <div class="row space-top-xl">
    <div class="col-xs-12">
      <h2 class="text-center">Discover why ASU is the university for you.</h2>
      <p class="text-center">You can thrive in tomorrow's dynamic work environment at one of the world's most innovative universities.</p>
    </div>
  </div><!-- /.row -->
  <div class="row space-bot-xl">
    <div class="col-sm-6 col-md-4 space-bot-md">
      <img class="img-responsive space-bot-md" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="">
      <h3><a href="#">Define a successful future</a></h3>
      <p>Actuarial Science is consistently one of the most secure and highest-paying jobs.</p>
      <button class="btn btn-gold btn-block btn-lg">Request information</button>
    </div>
    <div class="col-sm-6 col-md-4 space-bot-md">
      <img class="img-responsive space-bot-md" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="">
      <h3><a href="#">Discover excellence</a></h3>
      <p>ASU ranked #21 in the world for top institution in mathematics.</p>
      <button class="btn btn-gold btn-block btn-lg">Schedule a visit</button>
    </div>
    <div class="clearfix visible-sm-block"></div>
    <div class="col-sm-6 col-md-4 space-bot-md">
      <img class="img-responsive space-bot-md" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="">
      <h3><a href="#">Become a master learner</a></h3>
      <p>ASU math grad selected for Woodrow Wilson fellowship.</p>
      <button class="btn btn-gold btn-block btn-lg">How and when to apply</button>
    </div>
  </div><!-- /.row -->
</div><!-- /.container -->

<div class="gray-back">
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h2 class="h1 space-bot-0">News</h2>
      </div>
      <div class="col-md-2">
        <p class="space-bot-0 space-top-md text-right"><a class="no-border" href="#">More news</a></p>
      </div>
    </div><!-- /.row -->

    <hr class="space-top-sm">

    <div class="row space-bot-xl">
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">ASU math professor earns international Marie Curie fellowship</a></h3>
        <p>Top class researchers from outside Europe are selected for the fellowship to encourage research cooperation between Europe and other parts of the world.</p>
      </div>
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">Dean's Medalist melds mathematics and music degrees</a></h3>
        <p>"I usually get either shock and confusion that these things are so different, how could they possibly meld. Or a deep empathy and a realization that yes, of course, what better majors to combine."</p>
      </div>
      <div class="clearfix visible-sm-block"></div>
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">ASU mathematician earns prestigious NSF CAREER Award</a></h3>
        <p>The $400,000 CAREER Award will support Kao's research in an increasingly important area: he is designing functional brain imaging experiments that are crucially important for understanding the inner workings of the brain.</p>
      </div>
    </div><!-- /.row -->

    <div class="row">
      <div class="col-md-10">
        <h2 class="h1 space-bot-0">Events</h2>
      </div>
      <div class="col-md-2">
        <p class="space-bot-0 space-top-md text-right"><a class="no-border" href="#">More events</a></p>
      </div>
    </div><!-- /.row -->

    <hr class="space-top-sm">

    <div class="row space-bot-lg">
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">Distinguished Lecture Series in Nonlinear Studies</a></h3>
        <h4 class="space-bot-sm">Wed., Jan. 24</h4>
        <p>
          3:00 p.m.<br>
          Carson Ballroom, Old Main
        </p>
      </div>
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">35th annual Charles Wexler Awards</a></h3>
        <h4 class="space-bot-sm">Fri., Jan. 26</h4>
        <p>
          2:45 p.m.<br>
          Charles Wexler Hall A-206
        </p>
      </div>
      <div class="clearfix visible-sm-block"></div>
      <div class="col-sm-6 col-md-4">
        <h3><a href="#">Differential Geometry Seminar Series</a></h3>
        <h4 class="space-bot-sm">Mon., Feb. 16</h4>
        <p>
          1:30 - 2:30 p.m.<br>
          Physical Science Center A-wing, room 206
        </p>
      </div>
    </div><!-- /.row -->
  </div><!-- /.container -->

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <ol class="breadcrumb">
          <li><a href="/">Home</a></li>
          <li class="active">UI Kit: Standard Components</li>
        </ol>
      </div>
    </div><!-- /.row -->

    <div class="row space-bot-xl">
      <div class="col-md-12">
        <h1 class="page-header">UI Kit</h1>
      </div>

      <!-- Sidebar -->
      <div class="col-md-4 col-md-push-8">
        <div id="sidebarNav" class="sidebar-nav">
          <h4>Navigate this Doc</h4>
          <!-- List Group, linked items -->
          <div class="list-group">
            <a class="list-group-item" data-scroll href="#headings">Headings</a>
            <a class="list-group-item" data-scroll href="#content-formatting">Content Formatting</a>
            <a class="list-group-item" data-scroll href="#calendar-dates">Desktop Calendar Dates</a>
            <a class="list-group-item" data-scroll href="#buttons">Buttons</a>
            <a class="list-group-item" data-scroll href="#profile">Profile</a>
            <a class="list-group-item" data-scroll href="#campus-visits">Campus Visits</a>
            <a class="list-group-item" data-scroll href="#tables">Tables</a>
            <a class="list-group-item" data-scroll href="#forms">Forms</a>
            <a class="list-group-item" data-scroll href="#input-groups">Input Groups</a>
            <a class="list-group-item" data-scroll href="#panels-list-groups">Panels &amp; List Groups</a>
            <a class="list-group-item" data-scroll href="#images">Images</a>
            <a class="list-group-item" data-scroll href="#carousel">Carousel</a>
            <a class="list-group-item" data-scroll href="#labels-badges">Labels &amp; Badges</a>
            <a class="list-group-item" data-scroll href="#alerts">Alerts</a>
            <a class="list-group-item" data-scroll href="#resp-video">Responsive Video</a>
          </div>
        </div>
      </div>
      <!-- End Sidebar -->

      <!-- Main Content -->
      <div class="col-md-8 col-md-pull-4">

        <p class="lead">This page is a list of elements and how they display for reference. Use this page when building new content, and as a syntax example.</p>

        <hr>

        <h2 id="headings">Headings</h2>
        <h1 class="page-header">Page Header <small>With Small Text</small></h1>
        <h1>This is an h1 heading</h1>
        <h2>This is an h2 heading</h2>
        <h3>This is an h3 heading</h3>
        <h4>This is an h4 heading</h4>
        <h5>This is an h5 heading</h5>
        <h6>This is an h6 heading</h6>

        <hr>
        <ul class="nav nav-tabs alterna-tabs">
          <li class="active"><a href="#record1" data-toggle="tab">Record 1</a></li>
          <li class=""><a href="#record2" data-toggle="tab">Record 2</a></li>
          <li class=""><a href="#record3" data-toggle="tab">Record 3</a></li>
        </ul>
        <hr>

        <h2 id="content-formatting">Content Formatting</h2>

        <p class="lead">This is a lead paragraph.</p>

        <p>This is an <b>ordinary paragraph</b> that is <i>long enough</i> to wrap to <u>multiple lines</u> so that you can see how the line spacing looks. Lorem ipsum dolor sit amet, et vis purto tibique inimicus, euismod assueverit at mei, mea odio decore adipisci no. Pro ei inermis fierent, ut eam quodsi iriure. Volutpat maluisset id mea, mea eu omittam voluptua inciderint. Eum ut accusamus molestiae dissentiet, mei ex ponderum inimicus corrumpit, dicit fierent ut sea.</p>

        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
              <img src="https://static.sustainability.asu.edu/manual-uploads/100.png">
              <div class="caption">
                <p>Example descriptive information about the image.</p>
              </div>
            </div>
          </div>
        </div>

        <p class="text-danger">Danger color paragraph.</p>


        <p><small>This is text in a <code>small</code> wrapper. <abbr title="No Big Deal">NBD</abbr>, right?</small></p>

        <address>
          <strong>Twitter, Inc.</strong><br>
          795 Folsom Ave, Suite 600<br>
          San Francisco, CA 94107<br>
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>

        <address>
          <strong>Full Name</strong><br><a href="mailto:#">first.last@example.com</a>
        </address>

        <blockquote>
          <p>Here's what a blockquote looks like for ASU Web Standards.</p>
          <small>Use <code>small</code> to identify the <cite title="Source Title">source</cite>.</small>
        </blockquote>

        <ul>
          <li>Normal Unordered List</li>
          <li>Can Also Work
            <ul>
              <li>With Nested Children</li>
            </ul>
          </li>
          <li>Adds Bullets to Page</li>
        </ul>

        <ol>
          <li>Normal Ordered List</li>
          <li>Can Also Work
            <ol>
              <li>With Nested Children</li>
              <li>Adds Bullets to Page</li>
              <li>Adds Bullets to Page</li>
              <li>Adds Bullets to Page</li>
            </ol>
          </li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
          <li>Adds Bullets to Page</li>
        </ol>

        <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>.</p>
        <p>Use <code>&lt;pre&gt;</code> for multiple lines of code</p>
  <pre><code>function preFormatting() {
  // looks like this;
  var foo = bar;
  return true;
  } </code></pre>

        <hr>

        <h2 id="calendar-dates">Desktop Calendar Dates</h2>

        <div class="calendar-group">
          <div class="calendar-date calendarPopover">
            <time datetime="2014-01-01">
              <span class="weekday">Sun</span>
              <span class="date">1</span>
              <span class="month">Jan</span>
            </time>
          </div>
          <div class="calendar-date calendarPopover">
            <time datetime="2014-03-08">
              <span class="weekday">Tue</span>
              <span class="date">8</span>
              <span class="month">Mar</span>
            </time>
          </div>
          <div class="calendar-date calendarPopover">
            <time datetime="2014-06-27">
              <span class="weekday">Wed</span>
              <span class="date">27</span>
              <span class="month">Jun</span>
            </time>
          </div>
          <div class="calendar-date calendarPopover last">
            <time datetime="2014-10-30">
              <span class="weekday">Fri</span>
              <span class="date">30</span>
              <span class="month">Oct</span>
            </time>
          </div>
        </div><!-- /.calendar-container -->

        <hr>

        <h2 id="buttons">Buttons</h2>

        <div class="row">
          <div class="col-sm-6">
            <p><button class="btn btn-success">Success</button></p>
            <p><button class="btn btn-success btn-lg">Large Success</button></p>
          </div>
          <div class="col-sm-6">
            <p><button class="btn btn-danger">Danger </button></p>
            <p><button class="btn btn-danger btn-lg">Large Danger </button></p>
          </div>
        </div><!-- /.row -->

        <div class="row">
          <div class="col-sm-6">
            <p><button class="btn btn-primary">Primary CTA</button></p>
            <p><button class="btn btn-primary btn-lg">Large Primary CTA</button></p>
          </div>
          <div class="col-sm-6">
            <p><button class="btn btn-secondary">Secondary CTA</button></p>
            <p><button class="btn btn-secondary btn-lg">Large Secondary CTA</button></p>
          </div>
        </div><!-- /.row -->

        <h3>Block width buttons</h3>

        <div class="row">
          <div class="col-sm-6">
            <p><button class="btn btn-primary btn-block">Primary CTA button</button></p>
            <p><button class="btn btn-primary btn-lg btn-block">Large Primary CTA button</button></p>
          </div>
          <div class="col-sm-6">
            <p><button class="btn btn-secondary btn-block">Secondary CTA button</button></p>
            <p><button class="btn btn-secondary btn-lg btn-block">Large Secondary CTA button</button></p>
          </div>
        </div>

        <h3>Buttons - RFI, Visit, Apply</h3>

        <div class="row">
          <div class="col-sm-6">
            <p><button class="btn btn-gold btn-block">RFI, Visit, Apply button</button></p>
            <p><button class="btn btn-gold btn-lg btn-block">Large RFI, Visit, Apply button</button></p>
          </div>
        </div><!-- /.row -->

        <h3>Buttons - Explore Our Programs</h3>

        <div class="row">
          <div class="col-sm-6">
            <div class="panel explore-programs">
              <div class="panel-body">
                <h3>Explore Our Programs</h3>
                <p>Cu quo exerci petentium, unum ubique mentitum vel ex, eu est quis ridens. Et sed prima dissentiunt accommodare.</p>
                <button class="btn btn-blue btn-block">Undergraduate programs</button>
                <button class="btn btn-blue btn-block">Graduate programs</button>
              </div>
            </div><!-- /.explore-programs -->
          </div>
          <div class="col-sm-6">
            <p><button class="btn btn-blue btn-block">Explore Programs button</button></p>
            <p><button class="btn btn-blue btn-lg btn-block">Large Explore Programs</button></p>
          </div>
        </div><!-- /.row -->

        <h3>Button Groups</h3>

        <div class="row">
          <div class="col-sm-6">
            <div class="btn-group space-bot-md">
              <button type="button" class="btn btn-default">Left</button>
              <button type="button" class="btn btn-default">Middle</button>
              <button type="button" class="btn btn-default">Right</button>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="btn-group space-bot-md">
              <button type="button" class="btn btn-default"><i class="fa fa-list"></i></button>
              <button type="button" class="btn btn-default"><i class="fa fa-th-large"></i></button>
            </div>
          </div>
        </div><!-- /.row -->

        <h3>Dropdowns</h3>

        <div class="dropdown space-bot-md">
          <!-- Link or button to toggle dropdown -->
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
            Dropdown
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
            <li class="dropdown-header">Dropdown header</li>
            <li><a tabindex="-1" href="#">Another action</a></li>
            <li><a tabindex="-1" href="#">Something else here</a></li>
            <li class="disabled"><a tabindex="-1" href="#">Disabled link</a>
            <li class="divider"></li>
            <li><a tabindex="-1" href="#">Separated link</a></li>
          </ul>
        </div>

        <h3>Pagination</h3>

        <ul class="pagination">
          <li class="disabled"><a href="#"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>
          <li class="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
        </ul>

        <h3>Pagers</h3>

        <ul class="pager">
          <li class="previous"><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i> Prev</a></li>
          <li class="next"><a href="#">Next <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
        </ul>

        <h3>Tabs</h3>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs">
          <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
          <li><a href="#messages" data-toggle="tab">Messages</a></li>
          <li><a href="#settings" data-toggle="tab">Settings</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane fade in active" id="home">
            <p>Tab home content</p>
          </div>
          <div class="tab-pane fade" id="messages">
            <h3>The possibilities</h3>
            <p>Are endless...</p>
          </div>
          <div class="tab-pane fade" id="settings">
            <p>That's all.</p>
          </div>
        </div>

        <!-- Nav tabs -->
        <ul class="nav nav-tabs alterna-tabs">
          <li class="active"><a href="#record1" data-toggle="tab">Record 1</a></li>
          <li><a href="#record2" data-toggle="tab">Record 2</a></li>
          <li><a href="#record3" data-toggle="tab">Record 3</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div class="tab-pane fade in active" id="record1">
            <p>Here is another style of tab</p>
          </div>
          <div class="tab-pane fade" id="record2">
            <p>This is fun!</p>
          </div>
          <div class="tab-pane fade" id="record3">
            <p>That's all.</p>
          </div>
        </div>

        <hr>

        <h2 id="profile">Profile</h2>

        <div class="profile">
          <div class="profile-heading">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div class="profile-pic">
                  <img src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="Jason Striker" class="img-responsive space-bot-md">
                </div>
              </div>
              <div class="col-xs-12 col-sm-5 col-md-5 col-lg-6">
                <p>
                  <strong>Jason Striker</strong><br>
                  Manager Communications (UTO)<br>
                  UTO Planning and Programs<br>
                  University Staff
                </p>
                <p>
                  <a href="#">Jason.Striker@asu.edu</a><br>
                  <a href="#">(480) 727-5426</a><br>
                  Mail Code: 0101
                </p>
                <p>
                  Student Information<br>
                  Graduate Student<br>
                  Communication Studies<br>
                  New Interdis Arts &amp; Sciences
                </p>
              </div>
              <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2">
                <ul class="profile-actions">
                  <li><a href="#">Print Profile</a></li>
                  <li><a href="#">Update Profile</a></li>
                  <li><a href="#">Report Abuse</a></li>
                </ul>
              </div>
            </div><!-- /.row -->
          </div>

          <ul class="nav nav-tabs">
            <li class="active"><a href="#bio" data-toggle="tab">Bio</a></li>
            <li><a href="#research" data-toggle="tab">Research Interests</a></li>
            <li><a href="#vitae" data-toggle="tab">Curriculum Vitae</a></li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane fade in active" id="bio">
            <p>Jason Striker is an advocate and educator who facilitates intercultural, interpersonal and meaningful discourse. His specialization in digital communication, social media and online community building fosters the know-how and know-why, to support accessibility and accountability — for all — within online mediums. He strives to teach how to communicate effectively and judiciously, digitally and face to face.</p>
            <p>Jason serves the ASU Community as the communication manager for the University Technology Office; as a teaching assistant for COM 324; is the Vice President of Professional Development for the Graduate Professional Student Association, volunteers nationally with the National Assocation of Graduate &amp; Professional Students (NAGPS) as their Director of Relations, and serves on the Committee for Campus Inclusion (CCI).</p>
            </div>
            <div class="tab-pane fade" id="research">
              <h3>Profile example tab</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu felis, blandit a lorem nec; adipiscing pretium est. </p>
            </div>
            <div class="tab-pane fade" id="vitae">
              <h3>Profile example tab</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu felis, blandit a lorem nec; adipiscing pretium est.</p>
            </div>
          </div><!-- /.tab-content -->
        </div><!-- /.profile -->

        <hr>

        <h2 id="campus-visits">Visit Campus</h2>

        <h3>Map Block</h3>

        <div class="panel campus-visit">
          <div class="panel-body">
            <div class="row">
              <div class="col-sm-8 col-md-8">
                <h2>Visit our campus</h2>
              </div>
              <div class="col-sm-4 col-md-4">
                <button class="btn btn-primary pull-right">plan a visit</button>
              </div>
            </div><!-- /.row -->
            <address>
              <strong>Ira A. Fulton Schools of Engineering</strong><br>
              Arizona State University<br>
              P.O. Box 9309<br>
              Brickyard 6th Floor<br>
              Tempe, Arizona 85287-9309
            </address>
            <p>
              Administration: <a href="tel:480-727-5232">(480) 727 5232</a><br>
              Advising &amp; Student Services: <a href="tel:480-727-1874">(480) 727 1874</a>
            </p>
          </div>

        </div><!-- /.panel -->

        <h3>Content Block</h3>

        <div class="panel">
          <div class="panel-body">
            <h2>Lorem Ipsum Dolor</h2>
            <p>Cu quo exerci petentium, unum ubique mentitum vel ex, eu est quis ridens. Et sed prima dissentiunt accommodare, ut duo dicit denique, his facete definitionem ei. Omnis partiendo et sea, quo populo consulatu at.</p>
            <button class="btn btn-primary btn-block">Primary Call to Action</button>
            <button class="btn btn-secondary btn-block">Secondary Call to Action</button>
          </div>
        </div><!-- /.panel -->

        <hr>

        <h2 id="tables">Tables</h2>

        <h3>Faculty Table</h3>

        <table class="table table-striped table-hover responsive-table">
          <thead>
            <tr>
              <th class="hidden-xs"><span class="sr-only">Profile Picture</span></th>
              <th>Name <i class="fa fa-sort"></i></th>
              <th>Contact</th>
              <th>Expertise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img class="img-bordered" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="profile pic"></td>
              <td>
                <a href="#">Jane Applebee</a><br>
                Regents’, President’s, and Parents Association Professor; Dir., Center for Biology and Society; Faculty Leader, Human Dimensions
              </td>
              <td>
                <a href="#">maienschein@asu.edu</a><br>
                <a class="no-border" href="tel:480-965-6105">(480) 965-6105</a><br>
                Office: <a class="no-border" href="#">LSC 282</a>
              </td>
              <td><a href="#">Bioethics</a>, <a href="#">History of Science</a>, <a href="#">Philosophy of Science</a></td>
            </tr>
            <tr>
              <td><img class="img-bordered" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="profile pic"></td>
              <td>
                <a href="#">Jane Applebee</a><br>
                Regents’, President’s, and Parents Association Professor; Dir., Center for Biology and Society; Faculty Leader, Human Dimensions
              </td>
              <td>
                <a href="#">maienschein@asu.edu</a><br>
                <a class="no-border" href="tel:480-965-6105">(480) 965-6105</a><br>
                Office: <a class="no-border" href="#">LSC 282</a>
              </td>
              <td><a href="#">Science and Society</a>, <a href="#">Science Communication</a>, <a href="#">Science Policy</a></td>
            </tr>
            <tr>
              <td><img class="img-bordered" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="profile pic"></td>
              <td>
                <a href="#">Jane Applebee</a><br>
                Regents’, President’s, and Parents Association Professor; Dir., Center for Biology and Society; Faculty Leader, Human Dimensions
              </td>
              <td>
                <a href="#">maienschein@asu.edu</a><br>
                <a class="no-border" href="tel:480-965-6105">(480) 965-6105</a><br>
                Office: <a class="no-border" href="#">LSC 282</a>
              </td>
              <td><a href="#">Bioethics</a>, <a href="#">History of Science</a>, <a href="#">Philosophy of Science</a></td>
            </tr>
            <tr>
              <td><img class="img-bordered" src="https://static.sustainability.asu.edu/manual-uploads/100.png" alt="profile pic"></td>
              <td>
                <a href="#">Jane Applebee</a><br>
                Regents’, President’s, and Parents Association Professor; Dir., Center for Biology and Society; Faculty Leader, Human Dimensions
              </td>
              <td>
                <a href="#">maienschein@asu.edu</a><br>
                <a class="no-border" href="tel:480-965-6105">(480) 965-6105</a><br>
                Office: <a class="no-border" href="#">LSC 282</a>
              </td>
              <td><a href="#">Bioethics</a>, <a href="#">History of Science</a>, <a href="#">Philosophy of Science</a></td>
            </tr>
          </tbody>
        </table>

        <h3>Degree Listing Table</h3>

        <table class="table table-striped table-hover responsive-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Degree</th>
              <th>Course&nbsp;Plan</th>
              <th>Campus</th>
              <th>College&nbsp;URL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="#">African &amp; African American Studies</a></td>
              <td>BA</td>
              <td><a href="#">Major Map</a></td>
              <td>Tempe</td>
              <td><a href="#">College of Liberal Arts and Sciences</a></td>
            </tr>
            <tr>
              <td><a href="#">American Indian Studies</a></td>
              <td>BS</td>
              <td><a href="#">Major Map</a></td>
              <td>Tempe</td>
              <td><a href="#">College of Liberal Arts and Sciences</a></td>
            </tr>
            <tr>
              <td><a href="#">American Studies</a></td>
              <td>BA</td>
              <td><a href="#">Major Map</a></td>
              <td>West</td>
              <td><a href="#">New College of Interdisciplinary Arts &amp; Sciences</a></td>
            </tr>
            <tr>
              <td><a href="#">Applied Biological Sciences (Applied Biological Sciences)</a></td>
              <td>BS</td>
              <td><a href="#">Major Map</a></td>
              <td>Polytechnic</td>
              <td><a href="#">College of Technology and Innovation</a></td>
            </tr>
            <tr>
              <td><a href="#">Applied Computer Science</a></td>
              <td>BS</td>
              <td><a href="#">Major Map</a></td>
              <td>Polytechnic</td>
              <td><a href="#">College of Technology and Innovation</a></td>
            </tr>
          </tbody>
        </table>

        <h3>Default Table</h3>

        <div class="table-responsive">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Tables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Michael</td>
                <td>Are formatted like this</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lucille</td>
                <td>Do you like them?</td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.table-responsive -->

        <h3>Condensed &amp; Bordered Table</h3>

        <div class="table-responsive">
          <table class="table table-bordered table-condensed">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Tables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Michael</td>
                <td>This one is bordered and condensed</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Lucille</td>
                <td>Do you still like it?</td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.table-responsive -->

        <hr>

        <h2 id="forms">Forms</h2>

        <form role="form">
          <div class="form-group">
            <label for="exampleInputPlain1">Plain input</label>
            <input class="form-control" id="exampleInputPlain1">
          </div>
          <div class="form-group">
            <label for="exampleInputPlain1">Plain input disabled</label>
            <input class="form-control" id="exampleInputPlain2" disabled>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group">
            <label for="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile">
            <p class="help-block">Example block-level help text here.</p>
          </div>
          <div class="form-group">
            <label for="textareatest">Text area</label>
            <textarea id="textareatest" class="form-control"></textarea>
          </div>

          <h5>Validation States</h5>

          <div class="form-group has-success">
            <label class="control-label" for="inputSuccess">Input with success</label>
            <input type="text" class="form-control" id="inputSuccess">
          </div>
          <div class="form-group has-error">
            <label class="control-label" for="inputError">Input with error</label>
            <input type="text" class="form-control" id="inputError">
          </div>
          <hr>

          <h2 id="input-groups">Input Groups</h2>

          <div class="input-group space-bot-sm">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
            <input type="text" class="form-control" placeholder="Username">
          </div>

          <div class="input-group space-bot-sm">
            <input type="text" class="form-control input-large">
            <span class="input-group-addon input-large">.00</span>
          </div>

          <div class="input-group space-bot-sm">
            <span class="input-group-addon">$</span><input type="text" class="form-control">
            <span class="input-group-addon">.00</span>
          </div>

          <h5>Section Search is special</h5>

          <div class="input-group section-search space-bot-sm">
            <input type="text" placeholder="Search News" class="form-control input-md">
            <span class="input-group-btn">
              <button class="btn" type="button"><i class="fa fa-search" aria-hidden="true"></i><span class="sr-only">Search news</span></button>
            </span>
          </div><!-- /input-group -->

          <h5>Checkboxes</h5>

          <div class="checkbox">
            <label>
              <input type="checkbox">
              <span class="outer-wrap"><i class="fa fa-check"></i></span>
              Unchecked
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" checked>
              <span class="outer-wrap"><i class="fa fa-check"></i></span>
              Checked
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" disabled="disabled">
              <span class="outer-wrap"><i class="fa fa-check"></i></span>
              Disabled unchecked
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" disabled="disabled" checked>
              <span class="outer-wrap"><i class="fa fa-check"></i></span>
              Disabled checked
            </label>
          </div>

          <h5>Radio Buttons</h5>

          <div class="radio">
            <label>
              <input type="radio" name="test1" value="option1">
              <span class="outer-wrap"><i class="fa fa-circle"></i></span>
              Radio off
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="test1" value="option2" checked>
              <span class="outer-wrap"><i class="fa fa-circle"></i></span>
              Radio on
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="test2" value="option3" disabled="disabled">
              <span class="outer-wrap"><i class="fa fa-circle"></i></span>
              Radio off disabled
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="test2" value="option4" disabled="disabled" checked>
              <span class="outer-wrap"><i class="fa fa-circle"></i></span>
              Radio on disabled
            </label>
          </div>

          <div class="form-group">
            <label for="selectthis">Select</label>
            <select id="selectthis" class="form-control">
              <option selected="selected">Option selected</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option disabled>Option disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectthis">Select disabled</label>
            <select id="selectthis" class="form-control" disabled>
              <option selected="selected">Option selected</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option disabled>Option disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectthis2">Select Multiple Using CTRL</label>
            <select id="selectthis2" multiple class="form-control">
              <option selected="selected">Option selected</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option disabled>Option disabled</option>
            </select>
          </div>
          <div class="form-group">
            <label for="selectthis2">Select Multiple Using CTRL disabled</label>
            <select id="selectthis2" multiple class="form-control" disabled>
              <option selected="selected">Option selected</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option disabled>Option disabled</option>
            </select>
          </div>
          <p>
          <button type="submit" class="btn btn-primary">Submit</button>
          </p>

        </form>

        <hr>

        <h2 id="panels-list-groups">Panels and List Groups</h2>

        <ul class="list-group">
          <li class="list-group-item">List Group item</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>

        <hr>

        <div class="list-group">
          <a class="list-group-item active" href="#">List Group Linked Item active</a>
          <a class="list-group-item" href="#">Dapibus ac facilisis in</a>
          <a class="list-group-item" href="#">Morbi leo risus</a>
          <a class="list-group-item" href="#">Porta ac consectetur ac</a>
          <a class="list-group-item" href="#">Vestibulum at eros</a>
        </div>

        <div class="panel panel-default">
          <!-- Default panel contents -->
          <div class="panel-body">
            <h3>Panel with a List Group</h3>
            <p>Lorem ipsom, dolor set amet</p>

            <!-- List group -->
            <ul class="list-group">
              <li class="list-group-item active">Lorem Ipsum</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Morbi leo risus</li>
              <li class="list-group-item">Porta ac consectetur ac</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>

            <p>Open List Group</p>
            <!-- List Group, linked items -->
            <div class="list-group open">
              <a class="list-group-item" href="#">List Group Linked Items <span class="label label-success pull-right">99.971%</span></a>
              <a class="list-group-item active" href="#">Link with Active Class <span class="label label-success pull-right">99.971%</span></a>
              <a class="list-group-item" href="#">Morbi leo risus</a>
              <a class="list-group-item" href="#">Porta ac consectetur ac</a>
              <a class="list-group-item" href="#">Vestibulum at eros</a>
            </div>
          </div><!-- /.panel-body -->
        </div><!-- /.panel panel-default -->

        <hr>

        <h2 id="images">Images</h2>

        <div class="space-bot-md">
          <img src="https://static.sustainability.asu.edu/manual-uploads/100.png" class="space-bot-sm img-rounded">
          <img src="https://static.sustainability.asu.edu/manual-uploads/100.png" class="space-bot-sm img-circle">
          <img src="https://static.sustainability.asu.edu/manual-uploads/100.png" class="space-bot-sm img-thumbnail">
        </div>

        <hr>

        <h2 id="carousel">Carousel</h2>

        <div class="row">
          <div class="col-md-12">
            <h3>Success Stories</h3>
            <p class="lead">Empowering people and projects &ndash; it&rsquo;s what we do.</p>
            <div id="carouselHomepage" class="carousel slide row" data-ride="carousel">
              <!-- Wrapper for slides -->
              <div class="carousel-inner">
                <div class="item active">
                  <div class="col-sm-6">
                    <a href="#"><img src="https://static.sustainability.asu.edu/manual-uploads/100.png" class="img-responsive img-link"></a>
                  </div>
                  <div class="col-sm-6">
                    <h4><a href="#">Connected Treadmills</a></h4>
                    <p>Cupcake ipsum dolor sit amet toffee oat cake gingerbread cake. Hal&shy;vah halvah lollipop lollipop pudding lollipop cupcake biscuit. Apple pie cake chocolate cake marshmallow jelly-o.<br>
                    <a href="#">Continue Reading <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                  </div>
                </div><!-- /.item -->

                <div class="item">
                  <div class="col-sm-6">
                    <a href="#"><img src="https://static.sustainability.asu.edu/manual-uploads/100.png" class="img-responsive img-link"></a>
                  </div>
                  <div class="col-sm-6">
                    <h4><a href="#">Success Story for Websites</a></h4>
                    <p>Cupcake ipsum dolor sit amet toffee oat cake gingerbread cake. Halvah halvah lollipop lollipop pudding lollipop cupcake biscuit. Apple pie cake chocolate cake marshmallow jelly-o.<br>
                    <a href="#">Continue Reading <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
                  </div>
                </div><!-- /.item -->
              </div><!-- /.carousel-inner -->
              <!-- Controls -->
              <div class="col-md-12 carousel-nav">
                <ul class="pager carousel-nav">
                  <li class="previous disabled"><a data-slide="prev" href="#carouselHomepage"><i class="fa fa-angle-left" aria-hidden="true"></i> Previous Story</a></li>
                  <li class="next"><a data-slide="next" href="#carouselHomepage">Next Story <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div><!-- /#carouselHomepage -->
          </div><!-- /.col-md-12 -->
        </div>
        <hr>

        <h2 id="labels-badges">Labels and Badges</h2>

        <p>
          <span class="label label-default">Default</span>
          <span class="label label-primary">Primary</span>
          <span class="label label-success">Success</span>
          <span class="label label-info">Info</span>
          <span class="label label-warning">Warning</span>
          <span class="label label-danger">Danger</span>
          <a href="#">Inbox <span class="badge">42</span></a>
        </p>

        <hr>

        <h2 id="alerts">Alerts</h2>

        <div class="alert alert-success alert-dismissable">
          <strong>Success!</strong> You've done a swell job with timetravel, fella.
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
        </div>
        <div class="alert alert-info alert-dismissable">
          <strong>Info!</strong> You should consider <em>not</em> going to 1984.
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
        </div>
        <div class="alert alert-warning alert-dismissable">
          <strong>Warning!</strong> Imminent Dalek attack. Battle stations.
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
        </div>
        <div class="alert alert-danger alert-dismissable">
          <strong>Danger!</strong> You can't defend the tardis with a carrot.
          <button type="button" class="close" data-dismiss="alert" aria-hidden="true"><i class="fa fa-times"></i></button>
        </div>
        <hr>
      </div>
      <!-- End Main Content -->
    </div><!-- /.row -->
  </div><!-- /.container -->
</div>
<!-- End of page content -->

<!-- Begin Footer -->
<div class="footer">
  <div class="big-foot">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-12 space-bot-md">

            <address>
                            a Unit of: <br>
              <a href="https://sustainability.asu.edu">Julie Ann Wrigley Global Institute of Sustainability</a><br>
              <br>
              School of Sustainability, Arizona State University<br>
              800 South Cady Mall <br>
              Tempe, AZ 85281<br>
              Phone: <a class="phone-link" href="tel:480-727-6963" id="phone-link-in-footer">480-727-6963</a><br>              Fax: 480-965-8087<br>            </address>
            <p><a class="contact-link" href="mailto:schoolofsustainability@asu.edu?subject=SOS%20Contact%20Us" id="contact-us-link-in-footer">Contact Us</a></p>            <ul class="social-media">
              <li><a href="https://www.facebook.com/ASUsustainability" title="Facebook" id="facebook-link-in-footer"><i class="fa fa-facebook-square"></i></a></li>              <li><a href="https://twitter.com/asugreen" title="Twitter" id="twitter-link-in-footer"><i class="fa fa-twitter-square"></i></a></li>              <li><a href="https://plus.google.com/+SchoolofSustainabilityTempe" title="Google+" id="google_plus-link-in-footer"><i class="fa fa-google-plus-square"></i></a></li><li><a href="https://sustainability.asu.edu/linkedin" title="LinkedIn" id="linkedin-link-in-footer"><i class="fa fa-linkedin-square"></i></a></li><li><a href="https://vimeo.com/sustainability" title="Vimeo" id="vimeo-link-in-footer"><i class="fa fa-vimeo-square"></i></a></li><li><a href="https://www.flickr.com/photos/asu-gios/" title="Flickr" id="flickr-link-in-footer"><i class="fa fa-flickr"></i></a></li>            </ul>
            <a class="btn btn-primary" href="http://www.asufoundation.org/SchoolOfSustainability" id="contribute-button-in-footer">Contribute</a>
          </div>
        <div class="col-md-2 col-sm-3 space-bot-md">
          <h2 data-toggle="collapse" data-target="#academics-menu">Academics <span class="caret hidden-sm hidden-md hidden-lg"></span></h2>
          <ul class="big-foot-nav collapse" id="academics-menu">
            <li><a class="" href="#">Departments</a></li>
            <li><a class="" href="#">Executive Education</a></li>
            <li><a class="" href="#">MBA Degrees</a></li>
            <li><a class="" href="#">Master's Degrees</a></li>
            <li><a class="" href="#">Ph.D. Programs</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-3 space-bot-md">
          <h2 data-toggle="collapse" data-target="#connect-menu">Connect <span class="caret hidden-sm hidden-md hidden-lg"></span></h2>
          <ul class="big-foot-nav collapse" id="connect-menu">
            <li><a class="" href="#">Calendar of Events</a></li>
            <li><a class="" href="#">Contact Us</a></li>
            <li><a class="" href="#">Employment</a></li>
            <li><a class="" href="#">School Directory</a></li>
            <li><a class="" href="#">School Store</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-3 space-bot-md">
          <h2 data-toggle="collapse" data-target="#impact-menu">Impact <span class="caret hidden-sm hidden-md hidden-lg"></span></h2>
          <ul class="big-foot-nav collapse" id="impact-menu">
            <li><a class="" href="#">China Programs</a></li>
            <li><a class="" href="#">Invest</a></li>
            <li><a class="" href="#">KnowWPC</a></li>
            <li><a class="" href="#">News Releases</a></li>
            <li><a class="" href="#">Research Centers</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-3 space-bot-md">
          <h2 data-toggle="collapse" data-target="#people-menu">People <span class="caret hidden-sm hidden-md hidden-lg"></span></h2>
          <ul class="big-foot-nav collapse" id="people-menu">
            <li><a class="" href="#">Alumni</a></li>
            <li><a class="" href="#">Current Students</a></li>
            <li><a class="" href="#">Faculty &amp; Staff</a></li>
            <li><a class="" href="#">International Students</a></li>
            <li><a class="" href="#">Media</a></li>
          </ul>
        </div>
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div><!-- /.big-foot -->

  <div class="little-foot">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="little-foot-nav">
            <li><a class="" href="#">Copyright &amp; Trademark</a></li>
            <li><a class="" href="#">Accessibility</a></li>
            <li><a class="" href="#">Privacy</a></li>
            <li><a class="" href="#">Emergency</a></li>
            <li><a class="" href="#">Contact ASU</a></li>
          </ul>
        </div>
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div><!-- /.little-foot -->

</div><!-- /.footer -->

<!-- End Footer -->
`);
