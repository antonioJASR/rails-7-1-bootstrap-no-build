// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import {Turbo} from "@hotwired/turbo-rails"

import "@popperjs/core"
import "bootstrap"

import "controllers"

// It works
Turbo.setProgressBarDelay(100);