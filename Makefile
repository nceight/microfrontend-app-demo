.PHONY: help
help: ## print this help message
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {gsub("\\\\n",sprintf("\n%22c",""), $$2);printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.PHONY: install
install: install_mfa_container install_mfa_app_green install_mfa_app_red ## install all apps

.PHONY: install_mfa_container
install_mfa_container: ## install mfa-container
	@cd mfa-container && npm install

.PHONY: install_mfa_app_green
install_mfa_app_green: ## install mfa-app-green
	@cd mfa-app-green && npm install

.PHONY: install_mfa_app_red
install_mfa_app_red: ## install mfa-app-red
	@cd mfa-app-red && npm install

.PHONY: reinstall
reinstall: reinstall_mfa_container reinstall_mfa_app_green reinstall_mfa_app_red ## reinstall all apps

.PHONY: reinstall_mfa_container
reinstall_mfa_container: ## reinstall mfa-container
	@cd mfa-container && rm -rf node_modules
	@npm install

.PHONY: reinstall_mfa_app_green
reinstall_mfa_app_green: ## reinstall mfa-app-green
	@cd mfa-app-green && rm -rf node_modules
	@npm install

.PHONY: reinstall_mfa_app_red
reinstall_mfa_app_red: ## reinstall mfa-app-red
	@cd mfa-app-red && rm -rf node_modules
	@npm install

.PHONY: run
run: ## run all apps
	@cd mfa-app-green && npm start & cd mfa-app-red && npm start & cd mfa-container && npm start

.PHONY: clean
clean: ## clean all node_modules
	@cd mfa-app-green && rm -rf node_modules
	@cd mfa-app-red && rm -rf node_modules
	@cd mfa-container && rm -rf node_modules