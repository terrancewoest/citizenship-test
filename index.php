<!DOCTYPE html>
<html>
<head>
	<title>Citizenship Test : Flash Cards</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<style>
	.answers {
		line-height: 2em;
	}
	body {
		padding: 2em;
	}
	.results-failed {
		color: #a94442;
	}
	.results-passed {
		color: #3c763d;
	}
	.answers {
		font-style: italic;
		color: #3c763d;
	}
	</style>
</head>
<body>
<div class="container">
	<h1 class="text-center">Civics Practice Test!</h1>
	<hr/>
	<br/>
	<div id="app">
		<!-- This is the intro page -->
		<div v-class="hidden: hideIntroScreen" class="text-center">
			<h3> Choose your test!</h3>
			<br>
			<div class="col-md-8 col-md-offset-2">
				<select v-model="testSize" class="form-control">
					<option></option>
					<option value="10">10 Questions</option>
					<option value="25">25 Questions</option>
					<option value="50">50 Questions</option>
					<option value="100">100 Questions</option>
				</select>
				<br/>
				<hr>
				<br>
				<button v-on="click: beginTest" v-class="disabled: !testSize"class="btn btn-primary btn-lg">Begin Test</button>
			</div>
		</div>

		<!-- This is the Test Page -->
		<div v-class="hidden: hideTestScreen">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">Question: <span v-html="questionCount"></span> / {{testSize}}</h3>
				</div>
				<div class="panel-body">
					<h4 class="text-center">Civics Test Question# {{currentNumber}} </h4>
					<h3 class="text-center" v-html="currentQuestion "></h3>
				</div>
			</div>
			<br/>
			<div v-class="hidden : hideAnswer" class="well well-lg text-center">
				<h4 class="answers text-center" v-html="currentAnswer"></h4>
				<hr/>
				<h3 class="text-cente">Did you get it right?</h3>
				<br>
				<div class="row">
					<div class="col-sm-2 col-sm-offset-4">
						<button v-on="click: correctAnswer" class="btn btn-block btn-success">
							<span class="glyphicon glyphicon-ok"></span>
						</button>
					</div>
					<div class="col-sm-2">
						<button v-on="click: wrongAnswer" class="btn btn-block btn-danger">
							<span class="glyphicon glyphicon-remove"></span>
						</button>
					</div>
				</div>
			</div>
			<br/>
			<div  class="row">
				<div class="col-md-12">
					<button v-class="hidden: hideButton" class="btn btn-block btn-lg btn-default" v-on="click: showAnswer">
						Show Answer
					</button>
				</div>
			</div>
		</div>

		<!-- This is the Results screen -->
		<div v-class="hidden: hideResultsScreen" v-class="text-center">
			<div v-class="panel-success : passed,
						  panel-danger : !passed"
				 class="panel">
				<div class="panel-heading text-center">
					<h2 v-if="passed" class="panel-title">You Passed!</h2>
					<h2 v-if="!passed" class="panel-title">You Failed...</h2>
				</div>
				<div class="text-center panel-body" v-class="results-passed: passed, results-failed: !passed">
					<h2>Your total score was {{score}} / {{testSize}}</h2>
					<hr>
					<div class="col-md-4 col-md-offset-4">
						<button v-on="click:resetEverything" class="btn btn-block btn-primary btn-lg">
							Start Over
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/0.12.7/vue.js" type="text/javascript"></script>
	<script type="text/javascript" src="js/app.js"></script>
</body>
</html>